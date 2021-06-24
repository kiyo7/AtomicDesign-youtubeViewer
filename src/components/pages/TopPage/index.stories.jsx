import React from "react";
import TopPage from ".";

//ここで設定したタイトルがStorybookの左側のメニューアイテムのタイトルになる
export default { title: "pages/TopPage" };

export const topPage = () => <TopPage />;

topPage.story = { name: "トップページ" };
