export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getProduct(req, res)
            break;
    }
}

const getProduct = async (req, res) => {
    const products = [
        {
            "_id": "63ebb3c102c66bb9e88a0455",
            "name": "Laptop",
            "price": "75000",
            "description": "It's a very smart laptop. It;s configuration is very high. It's performance is superb",
            "mediaUrl": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        },
        {
            "_id": "63ebb44802c66bb9e88a0456",
            "name": "Mobile",
            "price": "10000",
            "description": "It's a very smart mobile. It is lightweight. It has a wonderful camera. It has fingerprint sensor",
            "mediaUrl": "https://i.ibb.co/vDJW9KR/v-a-tao-Oxvl-DO8-Rw-Kg-unsplash.jpg"
        },
        {
            "_id": "6401ce079c448b8be91a7068",
            "name": "Headphone",
            "price": "3500",
            "description": "This is a nice headphone. It's sound quality is very good. Users will experience a high quality sound",
            "mediaUrl": "https://i.ibb.co/jLyszcR/luke-peterson-l-UMj2-Zv5-HUE-unsplash.jpg"
        },
        {
            "_id": "6401ce079c448b8be91a7069",
            "name": "Controller",
            "price": "2200",
            "description": "This is a nice controller. It's controlling system is very smooth. Gamers will like this product",
            "mediaUrl": "https://i.ibb.co/DzM8Dnq/yousef-samuil-gz4-Lq-V-5-Zn-Y-unsplash.jpg"
        },
        {
            "_id": "64031a7efd2dc7cdd60a8b70",
            "name": "Iphone",
            "price": "125000",
            "description": "It's a very nice smartphone. It's operating system is very good. It has some excellent features",
            "mediaUrl": "http://res.cloudinary.com/dosv8tnyx/image/upload/v1677924988/z4iepfseegcy1pyfzxdu.png"
        },
        {
            "_id": "64031c58fd2dc7cdd60a8b79",
            "name": "Airpods",
            "price": "1500",
            "description": "It's a very nice airpods. It's totally wire free. It's rechargable too.",
            "mediaUrl": "http://res.cloudinary.com/dosv8tnyx/image/upload/v1677925463/pbjd7msog7xxzkjl3agx.png"
        }
    ]
    const { pid } = req.query;
    const product = products.find(product => product._id == pid);
    res.status(200).json(product);
}

