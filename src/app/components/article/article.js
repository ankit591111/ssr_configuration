import React from 'react';
import './article.css';

export default class ArticleContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            jsonData: this.props.data

        }
    }

    componentDidMount() {
            console.log(window.preloadState.list !== undefined);
            if(window.preloadState.list === undefined) {
                fetch('https://www.financialexpress.com/wp-json/wp/v2/single/story/1768253')
                    .then((res) => res.json()).then(res => {
                    this.setState({
                        isLoaded: true,
                        jsonData: res
                    })
                })
            }else{
                this.setState({
                    isLoaded: true,
                    jsonData: window.preloadState
                })
            }
    }

    render() {
       // console.table(this.props.jsonData.list[0]['items'][0])
        let articleHtml = this.state.isLoaded || this.props.data ?this.state.jsonData.list[0]['items'][0]: '';
        let bodyHtml = articleHtml ? articleHtml['body'] : '';
        let headline = articleHtml ? articleHtml['headline'] : '';
        let synopsisIntroduction = articleHtml ? articleHtml['introduction']:'';


        return (
            this.state.isLoaded || this.props.data ?
                <React.Fragment>
                    <div className='fewrapper'>
                        <div className='adsbox990x90'>
                            <div id='gpt_ad_FE_ROS_RESP_FIRST' className='ie-advert'>

                            </div>
                        </div>
                    </div>
                    <div className='mainarticle'>
                        <div className='hgroup'>
                            <h1 className='post-title'>{headline}</h1>
                            <div className='leftstory'>
                                <article>
                                    <h2 className='synopsis'>
                                        {synopsisIntroduction}
                                    </h2>
                                    <div dangerouslySetInnerHTML={{__html: bodyHtml}}></div>
                                </article>
                            </div>
                        </div>
                        <div id="taboola-below-article"></div>
                    </div>
                </React.Fragment> :
                <div></div>
        )
    }
}