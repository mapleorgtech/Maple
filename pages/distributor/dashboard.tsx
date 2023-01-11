import Link from "next/link";
import styled from "styled-components";
import Menu from "../../components/menu";
import LatestOrderStatus from "../../components/latestOrderStatus";

export default function Dashboard() {
	return (
		<Container>
			<Navbar />
			<BackdropOne>
				<LatestOrderStatus status={"undefined"}/>
			</BackdropOne>
			<BackdropTwo>
			</BackdropTwo>
		</Container>
	);
}

const Navbar = styled(Menu)`
	display: block;
	left: 0px;
	flex-grow: 1;
`;

const BackdropOne = styled.div`
	display: block;
	background: rgba(51, 63, 58, 0.5);
	backdrop-filter: blur(2.5px);
	border-radius: 15px;
    margin: 0px 20px 0px 20px;
    padding: 20px;
    width: fit-content;
`;

const BackdropTwo = styled.div`
	display: block;
	background: rgba(51, 63, 58, 0.5);
	backdrop-filter: blur(2.5px);
    margin: 0px 20px 0px 0px;
	border-radius: 15px;
	flex-grow: 8;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
    scroll-behavior: smooth;
	display: flex;
	padding-top: 150px;
	align-items: stretch;
	flex-direction: row;
	justify-content: space-around;
`;
