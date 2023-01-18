import React from "react";
import './page.sass'

const Contacts = ({img, title}) => {
return(
    <main className="content" style={{backgroundImage: `url("${img}")`}}>
        <section className="section-page">
        <h1 className="title">{title}</h1>
        <img className="img-cart" src={img} alt='img'/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, explicabo quod. Dolor excepturi unde sit aperiam sint, voluptates cupiditate eos debitis animi, molestias veritatis molestiae perferendis dolorum amet placeat harum facilis hic. Dolore repudiandae animi maiores doloribus qui deserunt facere consequatur, delectus necessitatibus quibusdam rem corrupti repellendus, odit quam praesentium modi perspiciatis. Modi, iure qui veniam mollitia eum quis eius totam saepe commodi odio, quidem illo repellendus magni ea officiis. Ad minus deleniti nisi, incidunt, quis assumenda magnam facere asperiores quo rerum fugit soluta ut quos tempore libero? Minima eligendi sequi, impedit laborum totam magni nisi magnam dolores eos. Quis delectus optio nam suscipit nostrum explicabo accusamus totam, eum vero, illo voluptatum atque impedit eius cum. Inventore placeat qui quod repellat nulla?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis reprehenderit sed eligendi tempora laboriosam dignissimos aut possimus culpa vitae, deserunt eos, dolorem accusamus quos! Nisi id inventore aut, architecto consequuntur nihil fugit eius distinctio ipsum eum odio alias perspiciatis voluptate delectus aspernatur explicabo quo voluptas recusandae nesciunt? Eos assumenda sit autem eligendi saepe labore sapiente facilis voluptatum, eum non praesentium, vitae iste accusantium possimus. Maiores architecto alias ea.</p>
        </section>
    </main>
)
}

export default Contacts;