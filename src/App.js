import { Container} from '@mui/system';
import './App.css';
import MenuModal from './components/MenuModal';

function App() {
  return (
   <Container className="main_container">
    <Container className="sub_container">
      <MenuModal title="Create"  description="Add items in your menu"    action="Create" gif="https://media3.giphy.com/media/UwkE00hS6GSyCR3aPK/giphy.gif?cid=ecf05e47n7zsetcnzfykl85nnd6r252vknn2m7gwesi8iu34&rid=giphy.gif&ct=s" />
      <MenuModal title="View"    description="View items in your menu"   action="View" gif="https://media0.giphy.com/media/2ZhGtR6AXUELqzqNmT/giphy.gif?cid=ecf05e475np7tf5amgkxgbype66t8znkwkdl00ezb2riqqxb&rid=giphy.gif&ct=ts" />
      <MenuModal title="Edit"    description="Edit items in your menu"   action="Edit" gif="https://media0.giphy.com/media/JPUkcgpejfKVU99bhY/giphy.gif?cid=ecf05e47n1geawiqj8r03qvmuluguvx6vxof8m7hegqrvkto&rid=giphy.gif&ct=s" />
      <MenuModal title="Delete"  description="Delete items in your menu" action="Delete" gif="https://media0.giphy.com/media/lxG29eG9nDAwBW3aC5/giphy.gif?cid=ecf05e47ngq9e43r0btp6y30vkrpekefdcgjan821syn6sfc&rid=giphy.gif&ct=s" />
    </Container>
   </Container>
  );
}

export default App;
