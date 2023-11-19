import { useNavigate } from 'react-router-dom';
import { Grid, Button, Img } from '../components/index.js';
import main from '../assets/images/mainCharacter.png';

function Main() {
	const navigate = useNavigate();

	const handleButtonClick = (path) => {
		navigate(path);
	};

	return (
		<>
			<Grid theme='main'>
				<Grid theme='introTagLine'>소비 데이터 기반 주식 추천 서비스</Grid>
				<Grid theme='title'>LinkStock</Grid>
				<Grid theme='description'>평범한 일상 속에서 개인화된 주식 투자 기회를 제안합니다.</Grid>
			</Grid>
			<Grid theme='main_background'>
				<Img theme='main' src={main} alt='main' />
				<Button theme='mainStartBtn' children='시작하기' onClick={() => handleButtonClick('/card')} />
			</Grid>
		</>
	);
}
export default Main;
