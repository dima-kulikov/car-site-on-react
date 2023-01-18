import React from "react";
import './page.sass'

const Shop = ({img, title}) => {

return(
    <main className="content" style={{backgroundImage: `url("${img}")`}}>
        <section className="section-page">
        <h1 className="title">{title}</h1>
        <img className="img-cart" src={img} alt='img'/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, consequuntur nisi. Tempore culpa libero veritatis inventore iure ipsam alias molestias labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio, repudiandae illum nemo ea excepturi exercitationem, harum placeat adipisci ducimus id esse amet officia sit numquam delectus hic ratione voluptatem similique ad est cupiditate fuga iusto! Debitis inventore aliquid modi! Quae eligendi nemo veritatis sunt, ut sint quas iste facere praesentium ipsam non omnis mollitia consequuntur totam alias officia recusandae suscipit error cupiditate. Nulla, totam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quaerat maiores alias eligendi libero, provident hic id eius quae dolorum voluptatibus rem unde voluptate consequatur qui dolorem quam, impedit amet iure obcaecati cum culpa. Necessitatibus ea itaque ducimus hic nihil minima, minus architecto aliquam modi facilis nam ipsa dolor non repudiandae illum, enim perspiciatis sapiente eveniet officiis possimus maxime accusamus nulla! Illo doloribus assumenda quas id saepe sequi perferendis maxime labore vel aspernatur placeat, laudantium optio tempora accusamus incidunt fugit beatae eos laboriosam dolorum minus eveniet! Voluptatum cum necessitatibus tempore numquam inventore, eligendi eveniet porro et doloremque iste corporis?</p>
        </section>
        
    </main>
)
}

export default Shop;

// 