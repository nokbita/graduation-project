import React, {useContext} from 'react';
import Header from "../components/Header/header";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import GpContent from "../components/GpContent/GpContent";
import Footer from "../components/Footer/Footer";
import Css from "./HomePage.module.css";
import Breadcrumb from "../components/UI/Breadcrumb";
import BreadcrumbContext from "../../store/BreadcrumbContext";




const HomePage = () => {
    const breadcrumbContext = useContext(BreadcrumbContext);

    return (
        <div className={Css.homePage}>
            <div className={Css.header}>
                <Header />
            </div>
            <div className={Css.content}>
                <div className={Css.left}>
                    <MainNavigation />
                </div>
                <div className={Css.right}>
                    <div className={Css.BreadcrumbNav}>
                        <span>脚印：</span>
                        {
                            breadcrumbContext.breadcrumbs.map((breadcrumb, index) => (
                                <Breadcrumb
                                    key={index}
                                    linkName={breadcrumb.linkName}
                                    onClickHandler={breadcrumb.onClickHandler}
                                    className={breadcrumb.isLast ? Css.currentBreadcrumb : null}
                                />
                            ))
                        }
                    </div>
                    <div className={Css.gpContent}>
                        <GpContent />
                    </div>
                </div>
            </div>
            <div className={Css.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;