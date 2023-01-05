import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import home from "../public/assets/images/home.js";
import bag from "../public/assets/images/bag.js";
import cart from "../public/assets/images/cart.js";
import customers from "../public/assets/images/customers.js";
import invoices from "../public/assets/images/invoices.js";
import settings from "../public/assets/images/settings.js";
import profileLogo from "../public/assets/images/profile.js";

const menuItems = [
	{
		title: "Dashboard",
		href: "/",
		logo: home
	},
	{
		title: "My Orders",
		href: "/",
		logo: bag
	},
	{
		title: "New Order",
		href: "/",
		logo: cart
	},
	{
		title: "Customers",
		href: "/",
		logo: customers
	},
	{
		title: "Invoices",
		href: "/",
		logo: invoices
	},
	{
		title: "Settings",
		href: "/",
		logo: settings
	}
];

export default function Menu() {
	return (
		<>
			<Wrapper>
				<UserBox>
					<Profile>
						<ProfileLogo />
						<Name>Ramesh Gupta</Name>
					</Profile>
					<Role>Distributor</Role>
				</UserBox>
				<ListContainer>
					{menuItems.map((item) => {
						return (
							<HorizontalContainer>
                                <DividerContainer>
                                    <CardDivider />
                                    <CardContainer>
                                        <Card>
                                            <item.logo className='logo' />
                                            <Title>{item.title}</Title>
                                        </Card>
                                    </CardContainer>
                                </DividerContainer>
								<Divider />
							</HorizontalContainer>
						);
					})}
				</ListContainer>
			</Wrapper>
		</>
	);
}

const ListContainer = styled.ul`
	width: auto;
	position: relative;
	display: flex;
	flex-direction: column;
    padding: 0px;
`;

const HorizontalContainer = styled.li`
    flex-direction: column;
    width: 500px;
    display: contents;
`;

const DividerContainer = styled.div`
    position: relative;
    display: flex;
    
    flex-direction: row;
    justify-content: space-between;
    width: auto;
`

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
    width: 90%;
    margin-left: 25px;
    position: absolute;
	justify-content: center;
`;

const CardDivider = styled.hr`
	display: block;
	height: 1px;
    width: 5px;
	align-self: center;
	background: #d9d9d9;
`;

const UserBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	margin-top: 40px;
`;
const Profile = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0px;
	height: min-content;
	background: #2a9d8f;
`;
const Name = styled.span`
	font-family: "Sen";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	border-radius: 5.5px;
	width: auto;
	display: block;
	padding: 5px;
	width: 100%;
	color: #ffffff;
	text-align: right;
	text-transform: uppercase;
`;
const ProfileLogo = styled(profileLogo)`
	left: 0px;
	z-index: 1;
	position: absolute;
`;
const Role = styled.p`
	font-family: "Sen";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	padding-right: 5px;
	color: #ffffff;
	max-width: 100%;
	display: inline-block;
	position: relative;
	text-align: right;
	text-transform: uppercase;
`;

const Title = styled.p`
	font-weight: 800;
	color: #ffa654;
	font-style: normal;
	font-size: 18px;
	text-transform: uppercase;
	cursor: none;
`;

const Card = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: relative;
	align-items: center;
	padding: 0px 40px;
	background: #404040;
	border-radius: 5.5px;
	cursor: pointer;
	&:hover {
		background: #e76f51;

		${Title} {
			color: white;
			font-weight: bolder;
		}

		.logo {
			path {
				fill: white;
			}
		}
	}
	.logo {
		position: absolute;
		left: 0px;
		width: 22;
		height: 22;
		transform: translateX(-50%);
		path {
			fill: #ffa654;
		}
	}
`;

const Divider = styled.hr`
	height: 1px;
	background: #d9d9d9;
	margin-top: 10px;
	margin-bottom: 20px;
    width: 90%;
    margin-left: auto;
    margin-right: 0px;
    align-self: baseline;
`;

const Wrapper = styled.div`
	display: flex;
	width: max-content;
	flex-direction: column;
	background: #264653;
	border-radius: 22px;
	justify-content: center;
	height: fit-content;
	padding: 40px 0px;
`;
