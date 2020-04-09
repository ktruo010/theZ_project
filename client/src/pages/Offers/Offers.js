import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Accordion from '../../components/Accordion/Accordion'
import axios from 'axios'

export class Offers extends Component {
    state = {
        fetchedOffersList: {},
        sortBy: "stars"
    }

    // Grab the data when the component mounts
    componentDidMount = async _ => {
        let fetchedOffers = await axios.get('http://localhost:3004/carrier_cards')
        this.setState({ fetchedOffersList: fetchedOffers.data})
    }
      

    // This is a function that sorts all the offers
    sortOffersList = selected => {
        let compare = (a, b) => {
            let offerA, offerB

            if (selected === "name") {
                offerA = a[selected]
                offerB = b[selected]
                let comparison = 0;
                if (offerA > offerB) {
                    comparison = 1;
                } else if (offerA < offerB) {
                    comparison = -1;
                }
                return comparison;
            } else {
                offerA = Math.floor(a[selected]) | 0
                offerB = Math.floor(b[selected]) | 0
                let comparison = 0;
                if (offerA < offerB) {
                    comparison = 1;
                } else if (offerA > offerB) {
                    comparison = -1;
                }
                return comparison;
            }
        }
        let sorted = this.state.fetchedOffersList.sort(compare)
        this.setState({ fetchedOffersList: sorted })
        
    }





    handleDropDownSort = selectedSort => {
        this.setState({ sortBy: selectedSort })
        this.sortOffersList(selectedSort)
    }
    offerAccordions = _ => {
        const { fetchedOffersList } = this.state;
        return Object.keys(fetchedOffersList).map((Offer, i) => { 
            const specificOffer = fetchedOffersList[Offer];
            return (
                <div className="offers__item" key={i}>
                    <Accordion {...specificOffer} />
                </div>
            )
        })
    }
    
    
    
    render() {
        return (
            <>
                <div className='offers'>
                    <div></div>
                    <div className='offers__row'>
                        <div className="offers__header">
                            <Header handleDropDownSort={this.handleDropDownSort} offers={this.state.fetchedOffersList.length}/>
                        </div>
                        <div className="offers__options">
                                {this.offerAccordions()}
                        </div>
                    </div>
                    <div></div>
                </div>


            </>
        )
    }
}

export default Offers
