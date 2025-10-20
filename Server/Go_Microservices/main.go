package main

import (
	"log"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/nianod/MERN-E-COMMERCE/db"
)

 
type Product struct {
	ID       string  `json:"id"`
	Name     string  `json:"name"`
	Price    float64 `json:"price"`
	Quantity int     `json:"quantity"`
}

func main() {
	db.ConnectDB() // connect to MongoDB

	r := gin.Default()

	 
	r.GET("/api/posts", func(c *gin.Context) {
		collection := db.DB.Collection("products")

		cursor, err := collection.Find(c, map[string]interface{}{})
		if err != nil {
			log.Println("Error fetching posts:", err)
			c.JSON(500, gin.H{"error": "Failed to fetch posts"})
			return
		}

		var posts []map[string]interface{}
		if err := cursor.All(c, &posts); err != nil {
			c.JSON(500, gin.H{"error": "Failed to parse posts"})
			return
		}

		c.JSON(200, posts)
	})

	 
	products := []Product{
		{ID: "1", Name: "Laptop", Price: 999.99, Quantity: 5},
		{ID: "2", Name: "Phone", Price: 499.99, Quantity: 10},
		{ID: "3", Name: "Headphones", Price: 79.99, Quantity: 15},
	}

	//Search endpoint
	r.GET("/api/search", func(c *gin.Context) {
		query := c.Query("q")
		if query == "" {
			c.JSON(http.StatusBadRequest, gin.H{"error": "missing search query"})
			return
		}

		var results []Product
		for _, p := range products {
			if strings.Contains(strings.ToLower(p.Name), strings.ToLower(query)) {
				results = append(results, p)
			}
		}

		c.JSON(http.StatusOK, results)
	})

	 
	r.GET("/api/products", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok"})
	})

	r.Run(":8080")
}
