import React from 'react';
import {Link} from 'react-router-dom'

const TopPage = () => (
    <>
        <h1>ここはトップページです</h1>
        <Link to='/play/hoge'>動画再生ページへ</Link>
    </>
)

export default TopPage;