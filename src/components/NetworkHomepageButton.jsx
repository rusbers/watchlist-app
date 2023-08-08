import Button from './Button';
import getImageSizeUrl from '../helpers/getImageSizeUrl';

const NetworkHomepageButton = ({ homepageLink, networks = [] }) => {
  const homepageLinkFormatted = homepageLink ? homepageLink.toLowerCase() : '';
  const multipleNetworks = networks.length > 1;

  const filteredNetwork = multipleNetworks
    ? networks.find((network) =>
        homepageLinkFormatted.includes(network?.name.toLowerCase().replace('+', ''))
      )
    : networks[0];

  const networkLogo = filteredNetwork?.logo_path
    ? `${getImageSizeUrl('w154/')}${filteredNetwork.logo_path}`
    : '';

  return homepageLink ? (
    <Button
      sx={{
        display: 'flex',
        maxWidth: '300px',
        textTransform: 'none',
        textAlign: 'center',
        marginTop: 1,
        maxHeight: '45px',
        paddingBlock: '25px',
      }}
      variant='light'
      component='a'
      target='_blank'
      href={homepageLink}
    >
      {filteredNetwork?.logo_path ? (
        <img
          height='45'
          style={{ maxHeight: '45px' }}
          src={networkLogo}
          alt={filteredNetwork.name}
        />
      ) : (
        'Homepage'
      )}
    </Button>
  ) : null;
};

export default NetworkHomepageButton;
