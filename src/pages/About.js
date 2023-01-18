import React from "react";
import './page.sass'

const About = ({img, title}) => {
return(
    <main className="content" style={{backgroundImage: `url("${img}")`}}>
        <section className="section-page">
        <h1 className="title">{title}</h1>
        <img className="img-cart" src={img} alt='img'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas ea culpa vel cumque, ipsam mollitia eos perspiciatis, explicabo reprehenderit maiores facilis! Aperiam, provident consequuntur!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam porro fuga! Mollitia corrupti inventore id, iure doloremque error nisi suscipit exercitationem quae ipsa voluptate amet voluptas incidunt dolore impedit fuga? Rerum molestiae ipsam nostrum enim iste sequi officiis provident vero accusantium commodi tenetur, repellendus, temporibus doloribus excepturi deserunt natus distinctio consequuntur. Minus, nemo et? Delectus cumque quasi ipsam consequuntur deserunt sed, quis similique, voluptas animi in, quos quas qui hic eligendi perferendis ea tenetur eius itaque illum quam! Quaerat explicabo eaque, ratione minus tenetur, omnis ut modi asperiores quibusdam nostrum unde recusandae consequuntur incidunt? Suscipit, eum exercitationem..</p>
        </section>
    </main>
)
}

export default About;