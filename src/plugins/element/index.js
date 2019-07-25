import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import './element-styles.scss';
import {
  Button, Card, Col, Container, Form, Input, Row,
} from 'element-ui';

const elems = [Button, Input, Container, Row, Col, Card, Form];

locale.use(lang);

elems.forEach(El => Vue.use(El, { locale }));
