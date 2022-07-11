import {useEffect, useState} from "react";

function Galerie() {

    const [selectedCategory, setSelectedCategory] = useState('')
    const [categories, setCategories] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('http://localhost:1337/api/categories')
            .then(res => res.json())
            .then(
                (result) => {
                    setCategories(result.data.map(category => category.attributes.name))
                }
            )
    }, [])


    useEffect(() => {
        fetch('http://localhost:1337/api/photos?populate=category,url')
            .then(res => res.json())
            .then(
                (result) => {
                    setImages(result.data.map(image => {
                        return {
                            cat: image.attributes.category.data.attributes.name,
                            image: 'http://localhost:1337' + image.attributes.url.data.attributes.formats.medium.url,
                            desc: image.attributes.description
                        }
                    }))
                }
            )
    }, [])


    const listImage =
        (selectedCategory === '' ? images :
            images.filter(image => image.cat === selectedCategory))
            .map((image) => <img key={image.image} src={image.image} alt={image.desc}/>)

    const listCat = categories.map((category) => <option key={category} value={category}>{category}</option>)


    return (
        <div className="bg-gray-200 h-screen">
            <form>
                <select className="bg-gray-300 p-2" value={selectedCategory} onChange={(event) => {
                    setSelectedCategory(event.target.value)
                }}>

                    <option value={''}>Filtre</option>
                    {listCat}
                </select>
            </form>
            <div className="bg-gray-200 grid grid-cols-4 gap-2 m-2">
            {listImage}
            </div>
        </div>
    )
}

export default Galerie