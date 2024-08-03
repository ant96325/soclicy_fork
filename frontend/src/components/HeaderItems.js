import { Link } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const HeaderItem = (props) => {
  return (
    <li>
      {!props.hasChild ?
        <Link className={`relative transition-all duration-300 font-bold leading-[40px] text-[16px] tracking-[var(--letter-spacing)] 
                        pb-[10px] cursor-pointer text-white ${props.active}`} to={props.to}>{props.title}</Link> :
        <Dropdown
          menu={{
            items,
          }}
        >
          <Link to="/home" className={`relative transition-all duration-300 font-bold leading-[40px] text-[16px] tracking-[var(--letter-spacing)] 
                        pb-[10px] cursor-pointer text-white ${props.active}`} onClick={(e) => e.preventDefault()}>
            <Space>
              Services
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>}

    </li>
  );
}


const items = [
  {
    label: (
      <Link to="blockchain" style={{
        padding: '13px 28px',
        display: 'block',
        fontFamily: 'Quicksand',
        fontSize: '16px',
        fontWeight: 'bold'
      }} >
        Blockchain
      </Link >
    ),
    key: '0',
  },

  {
    type: 'divider',
  },
  {
    label: (
      <Link to="software" style={{
        padding: '13px 28px',
        display: 'block',
        fontFamily: 'Quicksand',
        fontSize: '16px',
        fontWeight: 'bold'
      }} >
        Software
      </Link >
    ),
    key: '1',
  },
];


export default HeaderItem