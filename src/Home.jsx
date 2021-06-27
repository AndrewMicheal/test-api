import axios from 'axios';
import React, { Component } from 'react';

class Home extends Component {
    async componentDidMount() {
        let {data} = await new axios("https://quiet-sierra-33480.herokuapp.com/api/getCats");
        this.setState({libary:data.data})
    }
    state = {
        libary:[]
    }
    render() {
        console.log(this.state.libary)
        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                        { this.state.libary.length > 0 ? this.state.libary.map((item , index) => {
                            return (
                                <div key = {index}>
                                    <div className="col-md-4" >
                                        <span>{item.id}</span>
                                        <h2>{item.name}</h2>
                                    </div>
                                </div>
                            )
                        }) 
                         : <h2>Loading.....</h2>}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Home;