import {BookList, Book} from "./BookCard.jsx";

export function Card() {
    return (
        <div className={"card"}>
            <BookList>
                <Book>
                    <div>
                        <img src="https://reactjs.org/logo-og.png" alt="React Image" className={"img"}/>
                    </div>
                    <div className={"levaaa"}>
                        <div className={"nahore"}>Pán Prstenů</div>
                        <div className={"dole"}>Peter Jackson</div>
                    </div>
                    <div className="a">*****</div>
                </Book>
                <Book>
                    <div>
                        <img src="https://reactjs.org/logo-og.png" alt="React Image" className={"img"}/>
                    </div>
                    <div className={"levaaa"}>
                        <div className={"nahore"}>Matrix</div>
                        <div className={"dole"}>Lana Wachowski, Lilly Wachowski</div>
                    </div>
                    <div className={"a"}>****</div>
                </Book>
                <Book>
                    <div>
                        <img src="https://reactjs.org/logo-og.png" alt="React Image" className={"img"}/>
                    </div>
                    <div className={"levaaa"}>
                        <div className={"nahore"}>Já, legenda</div>
                        <div className={"dole"}>Francis Lawrence</div>
                    </div>
                    <div className={"a"}>**</div>
                </Book>
            </BookList>
        </div>
    )
}