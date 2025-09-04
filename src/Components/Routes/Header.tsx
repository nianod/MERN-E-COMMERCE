
const Header = () => {

    const headerStuff = {
        logo: "/download.jpg",
        title: "ARNOLD-SELLERS"
    }

  return (
    <div>
        <div>
            <img src={headerStuff.logo} alt={headerStuff.title} />
        </div>
    </div>
  )
}
export default Header