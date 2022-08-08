async function glossary(){
    let response = await fetch('glossary.json');
    let dictonary = await response.json();
    document.title = dictonary.title;
    document.querySelector('meta[name="description"]').content = dictonary.content_description;
    document.querySelector("link[rel='icon']").href = "image/" + dictonary.image_icon.url;
    document.querySelector("link[rel='apple-touch-icon']").href =  "image/" + dictonary.image_icon.url;
    let attrColor = document.querySelectorAll('meta[name="theme-color"]');
    attrColor.forEach((attr) => {
        let mediaAttr = attr.getAttribute('media');
        if(mediaAttr === "(prefers-color-scheme: light)"){
            attr.setAttribute('content', dictonary.theme_color.light);
        }
        else{
            attr.setAttribute('content', dictonary.theme_color.dark);
        }
    });
    document.querySelector('meta[name="og:title"]').content = dictonary.title;
    document.querySelector('meta[name="og:description"]').content = dictonary.content_description;
    document.querySelector('meta[name="og:image"]').content = "image/" + dictonary.image_icon.url;
    document.querySelector('meta[property="twitter:title"]').content = dictonary.title;
    document.querySelector('meta[property="twitter:description"]').content = dictonary.content_description;
    document.querySelector('meta[property="twitter:image"]').content = dictonary.image_icon.url;
}

glossary();