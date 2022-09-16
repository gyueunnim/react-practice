/* eslint-disable */

import { useState, useEffect } from 'react';

function TabContent({tab, shoe}) {
	
	let [fadeTab, setFadeTab] = useState("");

	useEffect(() => {
		setTimeout(() => { setFadeTab("end") }, 100)
		return () => { setFadeTab("") }
	}, [tab])

	return (
		<div className={"start "+fadeTab}>
			{[<DetailTab shoe={shoe}/>,
			<div>사이즈 추천 탭</div>,
			<div>스타일링 탭</div>][tab]}
		</div>
	)
}

function DetailTab({shoe}) {
    return (
        <>
        <h3 className="pt-5">{shoe.title}</h3>
        <h4>{shoe.series}</h4>
        <p>{shoe.content}</p>
        <p>1985년 처음 발매 된 에어 조던의 첫번째 모델이자, 나이키와 자회사인 조던 브랜드(Jordan Brand)의 상징이 된 신발.<br/><br/>

아름다운 디자인, 거기에 신발의 주인공인 마이클 조던의 엄청난 활약으로 인해 아디다스, 컨버스가 주도하고 있던 농구화 시장을 주도하는 데 성공한다. 이후로도 모두가 갖고 싶어하는 패션화로 거듭 났으며 여기에 나이키의 의도적인 수량 제한 정책과 최고의 셀럽들과 함께하는 콜라보레이션을 통해서 농구화로써의 기능성이 떨어진 지금에도 엄청난 매출을 자랑하는 모델이 되었다.<br/><br/>

뒷축에 에어 솔(Air Sole)이 탑재되어 있지만 쿠셔닝을 거의 느낄 수가 없으며 현재는 농구화보다는 패션화로 애용되고 있다. 패션화로서의 인기는 매우 높은 편이며 특유의 디자인이 매우 유명하기 때문에 조던 세계에 입문하면 가장 먼저 사게 되는 라인이다. 그만큼 하이 컷, 미드 컷, 로우 컷, 스트랩 장착 모델 등 조던 시리즈 중에 가장 바리에이션이 많은 시리즈이며, 조던 브랜드에서도 에어 포스 마냥 다양한 컬러를 마구 뽑아내고 있다.<br/><br/>

신발 혀에 나이키 스우시 로고가 있고 뒷꿈치에 점프맨 로고가 없는 OG 모델이거나 희소성 있는 컬러의 모델일 경우 상당히 높은 가격대가 형성되어 있다는 것을 참고해야 한다. 물론 하이 컷이 아닌 미드 컷, 로우 컷 모델이나 흔하고 칙칙한 컬러의 바리에이션은 크게 인기가 없어 상대적으로 저렴한 가격에 구할 수 있다.<br/><br/>

<img src="https://static.shoeprize.com/open_raffle/main_carousel/14936/555088-134-shoeprize-AIR-JORDAN-1-RETRO-HIGH-OG-UNIVERSITY-BLUE-388-1640530245548.jpeg" width="40%"/><br/><br/>

스펙은 뒤축 일반 에어솔로 실착 간 주의점이라면, 조던 1 아웃솔은 별명이 '지우개'일 정도로 마모되는 속도가 무척 빠른 편이다. 특히 뒤꿈치의 마모 수준이 상당한 편. 사실 이건 에어 조던 1 입장에선 억울한 게, 물론 당시 기술력의 한계도 있지만, 실내 코트용 농구화로 만들어진 걸 억지로 외출에 쓰니 발생하는 문제다. 정말 실내화로만 쓴다면 지우개라 부를 만큼 빨리 닳진 않는다. 솔 마모에 대한 해법으로 첫째는 솔스왑이라 하여 값이 싼 미드나 로우 모델과 솔을 교체하기, 둘째론 밑창 보강재를 이용하여 붙이기가 있다. 비싼 제품은 아예 비브람 사의 시트를 통째로 붙이기도 하지만, 워낙 인기가 좋은 조던 1이다보니 사이즈별로 직접 붙일 수 있는 제품을 오픈마켓 등지에서 쉽게 구할 수 있다.<br/><br/>

        </p>
        </>
    )
}

export default TabContent;