import React from "react";
import './page.sass'

const Product = ({img, title}) => {
return(
    <main className="content" style={{backgroundImage: `url("${img}")`}}>
        <section className="section-page">
        <h1 className="title">{title}</h1>
        <img className="img-cart" src={img} alt='img'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nulla temporibus, mollitia nobis ipsum sapiente, accusamus, similique commodi suscipit earum nam eos! Eveniet hic architecto distinctio expedita reprehenderit fugit facere perferendis laborum nesciunt ad corporis, repellat praesentium facilis ut provident autem id quasi pariatur cumque ipsam. Similique minus expedita sit reprehenderit unde, consectetur eligendi iure illo distinctio dolorem qui assumenda iste natus ipsum explicabo, perspiciatis harum?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius saepe sed voluptate officiis illum repellendus porro. Aspernatur officiis cupiditate laudantium ratione nostrum facere blanditiis commodi, voluptate nulla debitis perspiciatis inventore voluptatibus repellat molestias, provident voluptatem. Temporibus laborum magni rerum dicta! Saepe dolorem, et debitis minima illum sit cumque omnis modi. Placeat cupiditate harum corporis ipsam adipisci est aliquid repellendus assumenda, in minima, nemo distinctio soluta molestias eos blanditiis aliquam hic modi error! Rem earum reprehenderit facere id officia.</p>
        </section>
    </main>
)
}

export default Product;