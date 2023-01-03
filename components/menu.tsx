import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import home from "../public/assets/images/home.js";
import bag from "../public/assets/images/bag.js";
import cart from "../public/assets/images/cart.js";
import customers from "../public/assets/images/customers.js";
import invoices from "../public/assets/images/invoices.js";
import settings from "../public/assets/images/settings.js";

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
		title: "Customer List",
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
				<ul>
					{menuItems.map((item) => {
						return (
							<li>
								<Card>
									<item.logo className='logo' />
									<Title>{item.title}</Title>
								</Card>
							</li>
						);
					})}
				</ul>
			</Wrapper>
		</>
	);
}

const Title = styled.p`
	font-weight: 800;
	color: #ffa654;
	font-style: normal;
	font-size: 18px;
	line-height: 24px;
	text-transform: uppercase;
`;

const Card = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: relative;
	align-items: center;
	padding: 10px 40px;
	background: #404040;
	border-radius: 5.5px;
	margin-top: 20px;
	cursor: pointer;
	&:hover {
		background: #e76f51;

		${Title} {
			color: white;
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

const Wrapper = styled.div`
	display: flex;
	width: min-content;
	position: absolute;
	flex-direction: column;
	background: #264653;
	border-radius: 22px;
	justify-content: space-evenly;
	height: auto;
	bottom: 0px;
	top: 0px;
	margin-bottom: 50px;
	margin-top: 150px;
`;
