import React from 'react';
import Card from '../../components/Cards/cards';
import CardInfo from '../../components/Cards/cardsInfo';
import Texts from '../../components/textos/texts';
import './blog.scss';


const Blog = () => {
    return (
        <section>
            <Texts title="LATEST FROM BLOG"
                parrafo="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
                classTitle="section-title black"
                classParrafo="section-parrafo gray">
            </Texts>

            <div>
                {CardInfo.map(card =>{
                    return(
                        <Card cardImage={card.img} cardAlt={card.alt} cardTitle={card.title} cardDate={card.date} cardInfo={card.info}>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}

export default Blog;