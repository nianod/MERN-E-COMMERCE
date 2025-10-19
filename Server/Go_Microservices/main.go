package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strings"
)

 
type Product struct {
	ID    string  `json:"id"`
	Name  string  `json:"name"`
	Price float64 `json:"price"`
	Quantity num  `json: "quantity"`
}

//Data from mongo
var products = []Product{
	{ID: "1", Name: "Rubik's cube", Price: 100},
	{ID: "2", Name: "Flipper zero", Price: 350,}
	{ID: "3", Name: "Pesticide Spray", Price: 22},
	{ID: "4", Name: "Irrigation Pump", Price: 900},
}

 
func searchHandler(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query().Get("q")

	if query == "" {
		http.Error(w, "missing search query", http.StatusBadRequest)
		return
	}

	var results []Product
	for _, p := range products {
		if strings.Contains(strings.ToLower(p.Name), strings.ToLower(query)) {
			results = append(results, p)
		}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(results)
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(`{"status":"ok"}`))
}

func main() {
	http.HandleFunc("/search", searchHandler)
	http.HandleFunc("/health", healthHandler)

	log.Println("Go Search Service running on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
