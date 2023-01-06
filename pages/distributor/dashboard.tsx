import Link from "next/link";
import styled from "styled-components";
import Menu from "../../components/menu";
import LatestOrderStatus from "../../components/latestOrderStatus";


export default function Dashboard() {
    return(
        <Container>
            <Navbar/>
            <Backdrop>
                <LatestOrderStatus/>
            </Backdrop>
        </Container>
    )
}

const Navbar = styled(Menu)`
    display: block;
    left: 0px;
`

const Backdrop = styled.div`
    display: block;
    background: rgba(51, 63, 58, 0.5);
    backdrop-filter: blur(2.5px);
    border-radius: 15px;
`

const Container = styled.div`
    width: fit-content;
    height: max-content;
    display: flex;
    padding-top: 150px;
    flex-direction: row;
    justify-content: space-around;
`