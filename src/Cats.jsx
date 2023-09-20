import React, { useState } from 'react';
import './Cats.css';
import Modal from './Modal';
import catCard1 from "./Cat Card1.jpeg";
import catCard2 from "./Cat Card2.jpeg";
import catCard3 from "./Cat Card3.jpeg";
import catCard4 from "./Cat Card4.jpeg";
import catCard5 from "./Cat Card5.jpeg";
import catCard6 from "./Cat Card6.jpeg";


function Cats({ setPage }) {
    const [filter, setFilter] = useState('all');
    const uniqueId = 'cats-modal';
    const id = uniqueId;



    const catsData = [
        {
            imageSrc: catCard1,
            imageAlt: 'A white and gray cat is lying on its back with its legs raised up and sleeping on the table.',
            title: 'Abyssinian',
            activity: 'High',
            text: "The Aegean cat is one of the oldest natural domestic cat breeds in existence. They are friendly, intelligent, and notably chatty. Talk to an Aegean cat, and there likely to reply with happy chirps and meows."
        },
        {
            imageSrc: catCard2,
            imageAlt: 'A American shorthair cat look at camera',
            title: 'American Shorthair',
            activity: 'Medium',
            text: "American Shorthair cats are friendly, personable, and easy to care for. They exudes power, confidence, and grace. Their bodies are muscular and compact, with a rounded shape that's as cuddly as it is attractive."
        },
        {
            imageSrc: catCard3,
            imageAlt: 'A brown and white kitten stands on the edge of a stone table and looking downward.',
            title: 'Bengal',
            activity: 'High',
            text: "Playful and active, Bengal cats are excellent pets. They love to climb and like their wild, jungle dwelling cousins, they seek high vantage points from which to view their domain. "

        },
        {
            imageSrc: catCard4,
            imageAlt: 'A cute brown and white kitten with bright green eyes lying on a chair',
            title: 'Siberian',
            activity: 'Medium',
            text: "The Siberian is a medium-sized semi-long-haired breed with a stunning triple coat and a charming personality.Intelligent and playful, the Siberian cat loves to give and receive affection."

        },
        {
            imageSrc: catCard5,
            imageAlt: 'A brown and gray kitten standing on the floor',
            title: 'Persian',
            activity: 'Low',
            text: "Persian cats bring joy to their families via loving personalities and gentle yet playful antics.If you're looking for a cat that isn't into impressive displays of athleticism, the Persian might be the perfect breed for you. "

        },
        {
            imageSrc: catCard6,
            imageAlt: 'A gray and white kitten stands on a red leather sofa',
            title: 'Ragdoll',
            activity: 'Medium',
            text: "Ragdolls actively seek the company of their favorite humans, following family members from one room to the next. These cats often observe activities with happy, bemused expressions on their adorable faces."

        }
    ];

    let filteredCats = catsData;
    if (filter !== 'all') {
        filteredCats = catsData.filter(cat => cat.activity === filter);
    }

    const handleFilter = activity => {
        setFilter(activity);
    };

    return (
        <div className="cats" id="main">
            <h2 className="cats__title">CAT BREEDS</h2>

            <div className="cats__filter">
                <p className="cats__filter-label">FILTER BY ACTIVITY LEVEL</p>
                <button aria-label="Filter button for All" className={`cats__filter-button ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>
                    All
                </button>
                <button aria-label="Filter button for High" className={`cats__filter-button ${filter === 'High' ? 'active' : ''}`} onClick={() => handleFilter('High')}>
                    High
                </button>
                <button aria-label="Filter button for Medium" className={`cats__filter-button ${filter === 'Medium' ? 'active' : ''}`} onClick={() => handleFilter('Medium')}>
                    Medium
                </button>
                <button aria-label="Filter button for Low" className={`cats__filter-button ${filter === 'Low' ? 'active' : ''}`} onClick={() => handleFilter('Low')}>
                    Low
                </button>
            </div>

            <div className="cats__lists">
                <h3 className="cats__list-title"> LIST OF CAT BREEDS</h3>
                <div className="cats__list">
                    {filteredCats.map(cat => (
                        <div className="cats__card" key={cat.title}>
                            <img className="cats__card-pic" src={cat.imageSrc} alt={cat.imageAlt} />
                            <h4 className="cats__card-title">{cat.title}</h4>
                            <p className="cats__card-activity">Activity Level: {cat.activity}</p>
                            <p className="cats__card-text">{cat.text}</p>
                            <p className="cats__card-link">Please <Modal/> for more information!</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Cats;
