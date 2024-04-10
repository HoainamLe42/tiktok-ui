import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent-itm1-1.xx.fbcdn.net/v/t39.30808-6/431702329_2461041820745277_1502844029975994135_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6Wmfb5Thl4IAb7IkREe&_nc_ht=scontent-itm1-1.xx&oh=00_AfDirPzHCrJDtPtYm23Cg4Nx59Ri3yvmmGJodvSf11KYrg&oe=661BBB4F"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>HoaiNam Le</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>hoainamle99</span>
            </div>
        </div>
    );
}

export default AccountItem;
