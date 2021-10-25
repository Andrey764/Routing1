export default function CityPhotos(){
    const paths = ["../public/фото1.jpg","../public/фото2.jpg","../public/фото3.jpg",
    "../public/фото4.jpg","../public/фото5.jpg", "../public/фото6.jpg","../public/фото7.jpg"];
    return(
        <ul>
            {paths.map((path)=>
                <li>
                    <img src={path} alt="фото" width="100px" height="100px"/>
                </li>
            )}
        </ul>
    );
}