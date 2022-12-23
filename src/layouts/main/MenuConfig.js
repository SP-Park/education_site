// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE, PATH_COMMUNITY } from '../../routes/paths';
// components
import { PATH_AFTER_LOGIN } from '../../config';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/'
  },
  {
    title: '과정 소개',
    path: '/pages',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    children: [
      {
        subheader: '커리큘럼',
        items: [
          { title: '강사진', path: PATH_PAGE.teacher },
          { title: '한국어 회화', path: PATH_PAGE.culture },
          { title: '한국어 비지니스', path: PATH_PAGE.business },
          { title: 'FAQs', path: PATH_PAGE.faqs },
        ],
      },
      {
        subheader: '레벨 측정',
        items: [
          { title: '측정 안내', path: PATH_PAGE.leveltest }
        ],
      },
      {
        subheader: '수강료',
        items: [
          { title: '수강료 안내', path: PATH_PAGE.pricing }
        ],
      },
      {
        subheader: '커뮤니케이션',
        items: [{ title: '커뮤니케이션', path: PATH_COMMUNITY }],
      },
    ],
  },
  // {
  //   title: 'Documentation',
  //   icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
  //   path: PATH_DOCS,
  // },
];

export default menuConfig;
