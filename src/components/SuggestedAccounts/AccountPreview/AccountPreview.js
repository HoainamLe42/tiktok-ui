import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/91cf32ffabbf4c6c334f0c42bb59478c~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1714042800&x-signature=zqRBbP%2FWsbysGM%2Fblnn8XCkay8Q%3D"
                    alt=""
                />
                <Button outline>Follow</Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('user-info')}>
                    <p className={cx('nickname')}>
                        <strong>hoainamle4299</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Hoai Nam Le</p>
                </div>
                <p className={cx('analytics')}>
                    <div>
                        <strong className={cx('value')}>297.7K</strong>
                        <span className={cx('label')}>Followers</span>
                    </div>
                    <div>
                        <strong className={cx('value')}>5.6M</strong>
                        <span className={cx('label')}>Likes</span>
                    </div>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
