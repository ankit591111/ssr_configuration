import React from 'react';
import './header.scss';

function sideBarOpen() {
    /*
    const $ = window.$;
    $(this).toggleClass("active");
    $("body").toggleClass("show");

     */
}
function openSearchDialog() {
    /*
    const $ = window.$
    $(".srchform-full").show();
    $(".navicon-menu").removeClass("active");
    $("body").removeClass("show");
    $('.searchbx').hide();

     */
}
export default function Header() {
    return (
        <React.Fragment>
            <div className="mainnav" id="fixedMenubudget">
                <div className="feleftbox">
                    <a className="navicon-menu" aria-label='navigation icon' onClick={() => sideBarOpen()}></a>
                    <div className="felogo"><h1>
                        <a href="https://www.financialexpress.com/" aria-label='logo'
                           title="Financial Express - Business News, Stock Market News">
                            <img
                                src="https://www.financialexpress.com/wp-content/themes/vip/financialexpress/assets/images/fe-logo-with-read-to-lead-reverse.svg"
                                alt="Financial Express - Business News, Stock Market News"
                                title="Financial Express - Business News, Stock Market News" scale="0"/>
                        </a>
                    </h1>
                    </div>
                </div>
                <div className="topsocial fright">
                    <div className="fesearchbox fleft" onClick={()=>openSearchDialog()}>
                        <a className="searchbx" aria-label='search icon'>
                            <i className="fa fa-search"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="scrolling-nav">
                <ul>
                    <li><a

                        href="https://www.financialexpress.com/">Home</a></li>
                    <li><a

                        href="https://www.financialexpress.com/market/">Markets</a></li>
                    <li><a

                        href="https://www.financialexpress.com/market/stock-market/">Stocks</a></li>
                    <li><a

                        href="https://www.financialexpress.com/industry/">Industry</a></li>
                    <li><a

                        href="https://www.financialexpress.com/economy/">Economy</a></li>
                    <li><a
                        href="https://www.financialexpress.com/money/">Money</a></li>
                    <li><a
                        href="https://www.financialexpress.com/auto/">Auto</a></li>
                    <li><a
                        href="https://www.financialexpress.com/infrastructure/">Infra</a></li>
                    <li><a
                        href="https://www.financialexpress.com/industry/sme/">SME</a></li>
                    <li><a
                        href="https://www.financialexpress.com/mutual-funds-india/">MF</a></li>
                    <li><a
                        href="https://www.financialexpress.com/brandwagon/">Brandwagon</a></li>
                    <li><a
                        href="https://www.financialexpress.com/print/edits-columns/">Opinion</a></li>
                    <li><a
                        href="https://www.financialexpress.com/india-news/">India</a></li>
                    <li><a
                        href="https://www.financialexpress.com/hindi/">Hindi</a></li>
                </ul>
            </div>
        </React.Fragment>
    )
}