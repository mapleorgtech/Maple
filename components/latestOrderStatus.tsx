import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";
import { NextPage } from "next";

interface Props {
	status: String;
}

const Heading = styled.p`
	display: block;
	font-family: "Sen";
	font-style: normal;
	font-weight: 700;
	font-size: 17.5285px;
	line-height: 21px;
	margin: 15px auto 0px 10px;
	color: white;
`;

const OrderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;

const OrderStatusContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	margin: 10px 0px 10px 10px;
`;

const OrderStatusText = styled.p`
	display: block;
	color: #ffffff;
	font-weight: 400;
	font-size: 16px;
	line-height: 16px;
	margin: 0px auto 0px 10px;
`;

const OrderStatusDate = styled.p`
	display: block;
	color: #ffffff;
	margin: 3px auto 0px 10px;
	font-weight: 300;
	font-size: 12px;
`;

const OrderStatusEstimate = styled.p`
	display: block;
	color: #ffffff;
	margin: 3px auto 0px 10px;
	font-weight: 300;
	font-size: 12px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: #404040;
	border-radius: 10px;
	width: max-content;
	padding: 20px 40px 20px 20px;
`;

const DetailsButton = styled.div`
	display: flex;
	width: 100%;
	background: #ffa654;
	border-radius: 5.5px;
	padding: 10px;
	margin-top: 10px;
	cursor: pointer;
`;
const DetailsText = styled.p`
	margin: auto;
	color: #ffffff;
	text-align: center;
	text-transform: uppercase;
	font-weight: 800;
`;
const Step = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;
const VerticalStepper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
    align-items: center;
`;

const Line = styled.div`
	border-left: 1px solid #ff9c40;
    flex: 1 0 auto;

    &.first {
        flex: 0 0 50%;
        margin-top: auto;
    }

    &.last {
        flex: 0 0 50%;
    }

    &.active {

    }
`;

const CircleContainer = styled.div`
    position: absolute;
    height: fit-content;
    top: 0px;
    bottom: 0px;
    margin: auto 0px;
`;

const Circle = styled.div`
	background-color: #ff9c40;
	border-radius: 100%;
	width: 10px;
	height: 10px;
`;

const OrderPlaced = () => {
	return (
		<OrderStatusContainer>
			<OrderStatusText>Order Placed</OrderStatusText>
			<OrderStatusDate>10th November 2022</OrderStatusDate>
		</OrderStatusContainer>
	);
};

const OrderProcessing = () => {
	return (
		<OrderStatusContainer>
			<OrderStatusText>Order Processing</OrderStatusText>
			<OrderStatusDate>10th November 2022</OrderStatusDate>
		</OrderStatusContainer>
	);
};

const OrderShipped = () => {
	return (
		<OrderStatusContainer>
			<OrderStatusText>Order Shipped</OrderStatusText>
			<OrderStatusEstimate>Estimated Date of Shipping: </OrderStatusEstimate>
			<OrderStatusDate>10th November 2022</OrderStatusDate>
		</OrderStatusContainer>
	);
};

const OrderDelivered = () => {
	return (
		<OrderStatusContainer>
			<OrderStatusText>Order Delivered</OrderStatusText>
			<OrderStatusDate>10th November 2022</OrderStatusDate>
		</OrderStatusContainer>
	);
};

const LatestOrderStatus: NextPage<Props> = (props) => {
	return (
		<Wrapper>
			<Heading>Latest Order Status</Heading>
			<Heading>ORDER #20WB2412</Heading>
			<OrderContainer>
				<Step>
					<VerticalStepper className=''>
						<CircleContainer>
							<Circle className='' />
						</CircleContainer>
						<Line className='first' />
					</VerticalStepper>
					<OrderPlaced />
				</Step>

				<Step>
					<VerticalStepper className=''>
						<CircleContainer>
							<Circle className='' />
						</CircleContainer>
						<Line className='' />
					</VerticalStepper>
					<OrderProcessing />
				</Step>

				<Step>
					<VerticalStepper className=''>
						<CircleContainer>
							<Circle className='' />
						</CircleContainer>
						<Line className='' />
					</VerticalStepper>
					<OrderShipped />
				</Step>

				<Step>
					<VerticalStepper className=''>
						<CircleContainer>
							<Circle className='' />
						</CircleContainer>
						<Line className='last' />
					</VerticalStepper>
					<OrderDelivered />
				</Step>
			</OrderContainer>
			<DetailsButton>
				<DetailsText>Detials</DetailsText>
			</DetailsButton>
		</Wrapper>
	);
};

export default LatestOrderStatus;
