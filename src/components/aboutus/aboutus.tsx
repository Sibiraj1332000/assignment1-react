import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAboutUsDetails } from '../../api/apiAboutUs/apiCallsAboutUs';
import { RootState } from '../../redux/store';
import './aboutus.css';

class AboutUs extends Component<{ aboutData: any, fetchAboutDetails: any }, {}>{
    componentDidMount() {
        this.props.fetchAboutDetails();
    }
    render() {
        return (
            <div className='container aboutus-maindiv'>
                <h2>About US</h2>
                <h4>Administraction</h4>
                <p>
                    The administration of the State Central Library is vested with the State
                    Librarian, who is the Head of the Department. There is an Advisory Committee
                    in the Library. Two Deputy State Librarians assist the State Librarian in Library,
                    academic and the Administrative Assistant to the State Librarian assist the State
                    Librarian in the Administrative, Accounts and Audit matters.
                </p>
                <h4>Library Collection</h4>
                <h4>Books</h4>
                <p>The library has a total collection of 455274 documents in different languages such as English, Malayalam, Hindi, Tamil, Sanskrit in various disciplines.</p>
                <h4>Journals</h4>
                <p>
                    The library subscribes 25 dailies and 225 journals including foreign journals.
                    Language wise details.
                </p>
                <table className='aboutus-table'>
                    <thead>
                        <tr>
                            <td></td>
                            <td>	Dailies</td>
                            <td>	Journals</td>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.aboutData.generalBook &&
                            this.props.aboutData.generalBook.map((item: { id: number, language: string, dailies: number, journals: number }): React.ReactNode => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.language}</td><td>{item.dailies}</td><td>{item.journals}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table >
                <table className='aboutus-table'>
                    <thead>
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'center' }} >Childrens’ Journals</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.aboutData.childBook &&
                            this.props.aboutData.childBook.map((item: { id: number, language: string, journals: number }): React.ReactNode => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.language}</td><td></td><td>{item.journals}</td>
                                    </tr>
                                )
                            })}

                    </tbody>
                </table>

            </div >
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        aboutData: state.aboutUSTable
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchAboutDetails: () => dispatch(fetchAboutUsDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);