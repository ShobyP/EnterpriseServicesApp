import React, {Component} from 'react';
// import cuteLlama from '../images/cute-llama.jpg';
import coolLlama from '../images/Llama-face/SVG/heart-glasses.svg';
import coolLlama2 from '../images/Llama-face/SVG/ribbon.svg';
import coolLlama3 from '../images/Llama-face/SVG/glasses01.svg';
// import elephant from '../images/Elephant.png'
// import flamingo from '../images/Flamingo.png'
import Card from "./Card";
import ProjectCardsData from '../data/ProjectCardsData'

export default class Projects extends Component {



    render() {

        return (<>
            <div className="my-5">
                <h1 className="text-center navbar-brand">
                    My Projects
                </h1>
            </div>

            <div className="container-fluid mb-5">
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
                            {/*<Card*/}
                            {/*  img={coolLlama2}*/}
                            {/*  cardTitle={"Project Narnia"}*/}
                            {/*  cardText={"This is a portal to Narnia."}*/}
                            {/*  listItem1={"Simple and Realistic abyss"}*/}
                            {/*  listItem2={"Lots of talking animals"}*/}
                            {/*  listItem3={"Free magic show included"}*/}
                            {/*  cardLink1={"/about"}*/}
                            {/*  cardLink2={"/home"}*/}
                            {/*/>*/}


                            {/*<Card*/}
                            {/*  img={coolLlama2}*/}
                            {/*  cardTitle={"Project Narnia"}*/}
                            {/*  cardText={"This is a portal to Narnia."}*/}
                            {/*  listItem1={"Simple and Realistic abyss"}*/}
                            {/*  listItem2={"Lots of talking animals"}*/}
                            {/*  listItem3={"Free magic show included"}*/}
                            {/*  cardLink1={"/about"}*/}
                            {/*  cardLink2={"/home"}*/}
                            {/*/>*/}
                            {/*<Card*/}
                            {/*  img={coolLlama}*/}
                            {/*  cardTitle={"Project Jumanji"}*/}
                            {/*  cardText={"Be careful with this one."}*/}
                            {/*  listItem1={"Dangerous but Realistic abyss"}*/}
                            {/*  listItem2={"Unpredictable physics"}*/}
                            {/*  listItem3={"Comes with 3 extra lifelines"}*/}
                            {/*  cardLink1={"/about"}*/}
                            {/*  cardLink2={"/home"}*/}
                            {/*/>*/}
                            {/*<Card*/}
                            {/*  img={coolLlama3}*/}
                            {/*  cardTitle={"Project 007"}*/}
                            {/*  cardText={"Play like james llama"}*/}
                            {/*  listItem1={"Cool cars? Check!"}*/}
                            {/*  listItem2={"Perfectly tailored suit? Check!"}*/}
                            {/*  listItem3={"Evil villain with shark tank? Check! "}*/}
                            {/*  cardLink1={"/about"}*/}
                            {/*  cardLink2={"/home"}*/}
                            {/*/>*/}

                            {/*<Card*/}
                            {/*  img={coolLlama2}*/}
                            {/*  cardTitle={"Project Narnia"}*/}
                            {/*  cardText={"This is a portal to Narnia."}*/}
                            {/*  listItem1={"Simple and Realistic abyss"}*/}
                            {/*  listItem2={"Lots of talking animals"}*/}
                            {/*  listItem3={"Free magic show included"}*/}
                            {/*  cardLink1={"/about"}*/}
                            {/*  cardLink2={"/home"}*/}
                            {/*/>*/}

                            {/*<Card*/}
                            {/*  img={coolLlama}*/}
                            {/*  cardTitle={"Project Jumanji"}*/}
                            {/*  cardText={"Be careful with this one."}*/}
                            {/*  listItem1={"Dangerous but Realistic abyss"}*/}
                            {/*  listItem2={"Unpredictable physics"}*/}
                            {/*  listItem3={"Comes with 3 extra lifelines"}*/}
                            {/*  cardLink1={"/about"}*/}
                            {/*  cardLink2={"/home"}*/}
                            {/*/>*/}

                            {/*<Card*/}
                            {/*  img={coolLlama3}*/}
                            {/*  cardTitle={"Project 007"}*/}
                            {/*  cardText={"Play like james llama"}*/}
                            {/*  listItem1={"Cool cars? Check!"}*/}
                            {/*  listItem2={"Perfectly tailored suit? Check!"}*/}
                            {/*  listItem3={"Evil villain with shark tank? Check! "}*/}
                            {/*  cardLink1={"/about"}*/}
                            {/*  cardLink2={"/home"}*/}
                            {/*/>*/}

                            {/*<Card*/}
                            {/*  img={coolLlama2}*/}
                            {/*  cardTitle={"Project Narnia"}*/}
                            {/*  cardText={"This is a portal to Narnia."}*/}
                            {/*  listItem1={"Simple and Realistic abyss"}*/}
                            {/*  listItem2={"Lots of talking animals"}*/}
                            {/*  listItem3={"Free magic show included"}*/}
                            {/*  cardLink1={"/about"}*/}
                            {/*  cardLink2={"/home"}*/}
                            {/*/>*/}

                            {/*<Card*/}
                            {/*  img={coolLlama}*/}
                            {/*  cardTitle={"Project Jumanji"}*/}
                            {/*  cardText={"Be careful with this one."}*/}
                            {/*  listItem1={"Dangerous but Realistic abyss"}*/}
                            {/*  listItem2={"Unpredictable physics"}*/}
                            {/*  listItem3={"Comes with 3 extra lifelines"}*/}
                            {/*  cardLink1={"/about"}*/}
                            {/*  cardLink2={"/home"}*/}
                            {/*/>*/}

                            {/*<Card*/}
                            {/*  img={coolLlama3}*/}
                            {/*  cardTitle={"Project 007"}*/}
                            {/*  cardText={"Play like james llama"}*/}
                            {/*  listItem1={"Cool cars? Check!"}*/}
                            {/*  listItem2={"Perfectly tailored suit? Check!"}*/}
                            {/*  listItem3={"Evil villain with shark tank? Check! "}*/}
                            {/*  cardLink1={"/about"}*/}
                            {/*  cardLink2={"/home"}*/}
                            {/*/>*/}


                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}

