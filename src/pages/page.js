import React from "react";
import './page.sass'

const Page = ({img, title}) => {
return(
    <main className="content" style={{backgroundImage: `url("${img}")`}}>
        <section className="section-page">
        <h1 className="title">{title}</h1>
        <img className="img-cart" src={img} alt='img'/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam deleniti maiores vel hic blanditiis et id, magni qui aut quaerat aliquam, voluptatum, fuga quisquam repellat voluptatem assumenda voluptate! Sequi et explicabo distinctio laudantium aliquid similique aspernatur autem! Maxime dolorem sed earum, sit eum vero tenetur laborum necessitatibus obcaecati odio sunt, fugit vitae rerum nulla voluptate, quis vel commodi blanditiis quia harum aliquam dolores hic sapiente. Voluptatibus voluptatem vitae odit molestiae cupiditate sit dolor magni, in dignissimos recusandae iste repudiandae quia ad temporibus rerum possimus nihil nam omnis eius accusamus quibusdam aliquid. Doloremque at dolorem excepturi facere nulla. Quo earum cupiditate ullam eligendi accusamus similique blanditiis corporis necessitatibus! Quae minus tenetur fugiat.</p>
        <p>Quibusdam deleniti maiores vel hic blanditiis et id, magni qui aut quaerat aliquam, voluptatum, fuga quisquam repellat voluptatem assumenda voluptate! Sequi et explicabo distinctio laudantium aliquid similique aspernatur autem! Maxime dolorem sed earum, sit eum vero tenetur laborum necessitatibus obcaecati odio sunt, fugit vitae rerum nulla voluptate, quis vel commodi blanditiis quia harum aliquam dolores hic sapiente. Voluptatibus voluptatem vitae odit molestiae cupiditate sit dolor magni, in dignissimos recusandae iste repudiandae quia ad temporibus rerum possimus nihil nam omnis eius accusamus quibusdam aliquid. Doloremque at dolorem excepturi facere nulla. Quo earum cupiditate ullam eligendi accusamus similique blanditiis corporis necessitatibus! Quae minus tenetur fugiat.</p>
        
        </section>
    </main>
)
}

export default Page;