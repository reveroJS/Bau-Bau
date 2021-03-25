import "./Meals.css";

const Meals = () => {


    return (
        <section>
            <div className="conteiner-meals">
                <div className="card">
                    <div className="imgBox">
                        <img src="/beef/beef_1-9813e0a4e1462922f2ebbbfc2de2b180.jpg" alt="beef" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Food One</h2>
                            <p>Reprehenderit dolore laboris incididunt pariatur eu ex est do velit officia excepteur . Et sicing aliquip culpa eiusmod.</p>
                            <input href="" type="button" value="Buy"/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBox">
                        <img src="/chicken/chicken_1-3ba5ab9a5d71e3c04343c589daf974b9.jpg" alt="chiken" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Food Two</h2>
                            <p>Reprehenderit dolore laboris incididunt pariatur eu ex est do velit officia excepteur . Et sicing aliquip culpa eiusmod.</p>
                        </div>
                    </div>
                </div><div className="card">
                    <div className="imgBox">
                        <img src="/lamb/lamb_1-c1620723d608ce17c141685ed6ef31d9.jpg" alt="beef" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Food Three</h2>
                            <p>Reprehenderit dolore laboris incididunt pariatur eu ex est do velit officia excepteur . Et sicing aliquip culpa eiusmod.</p>
                        </div>
                    </div>
                </div><div className="card">
                    <div className="imgBox">
                        <img src="/turkey/turkey_1-e66d7583287e48cc3cfc824652ccbd71.jpg" alt="turkey" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Food Four</h2>
                            <p>Reprehenderit dolore laboris incididunt pariatur eu ex est do velit officia excepteur . Et sicing aliquip culpa eiusmod.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


}

export default Meals;