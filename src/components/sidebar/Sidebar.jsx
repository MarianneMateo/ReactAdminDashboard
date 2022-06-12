import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<span className="logo">Tanzanite Admin</span>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<DashboardIcon className="icon" />
						<span>Dashboard</span>
					</li>
					<p className="title">LISTS</p>
					<li>
						<PersonIcon className="icon" />
						<span>Users</span>
					</li>
					<li>
						<StoreIcon className="icon" />
						<span>Products</span>
					</li>
					<li>
						<ShoppingCartIcon className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className="icon" />
						<span>Delivery</span>
					</li>
					<p className="title">USEFUL</p>
					<li>
						<QueryStatsIcon className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsActiveIcon className="icon" />
						<span>Notifications</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<SettingsSystemDaydreamIcon className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<PsychologyIcon className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<SettingsIcon className="icon" />
						<span>Setting</span>
					</li>
					<p className="title">USER</p>
					<li>
						<AccountCircleIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<ExitToAppIcon className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div className="colorOption"></div>
				<div className="colorOption"></div>
			</div>
		</div>
	);
};

export default Sidebar;
