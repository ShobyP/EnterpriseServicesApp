import React, { Component } from 'react';
import Card from './Card';
import ProjectCardsData from '../data/ProjectCardsData';

export default class Projects extends Component {

    render() {
        return (<>
            <div className="my-5 pt-lg-5">
                <h1 className="text-center navbar-brand">
                    My Projects
                </h1>
            </div>

            <div className="container-fluid mb-5 mt-lg-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className='row'>
                            {
                                ProjectCardsData.map((card, key) =>
                                    <Card
                                      key={key}
                                      img={card.img}
                                      cardTitle={card.cardTitle}
                                      cardText={card.cardText}
                                      listItem1={card.listItem1}
                                      listItem2={card.listItem2}
                                      listItem3={card.listItem3}
                                      cardLink1={card.cardLink1}
                                      cardLink2={card.cardLink2}
                                    />
                                  )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}

