import React from "react";
import Dialogs from "./Dialogs";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



//проверяем вошли мы в аккаут или нет, если нет - редирект на логин, если да, отрисовываем диалоги
export default compose(withAuthRedirect)(Dialogs);