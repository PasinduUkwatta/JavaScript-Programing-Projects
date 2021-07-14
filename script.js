const googleDatabase =[
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'carpictures.com',
    'cricket.com',
    'oldcarnames',
    'newcarnames',
    'toyotacarnames',
    'carbmwnames',
    'carbmwimages'
]

const googleSearch =(searchInput,db)=>{
    const matches =db.filter(website =>{
        return website.includes(searchInput)
    })
    return matches.length>5? matches.slice(0,5) :matches
}

// console.log(googleSearch("car",googleDatabase))

module.exports=googleSearch