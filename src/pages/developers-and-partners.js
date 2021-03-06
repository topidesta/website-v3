import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Hero from '../components/organims/Hero';
import Seo from '../components/molecules/Seo';
import DevelopersAndPartnersSection1 from '../components/organims/DevelopersAndPartnersSection1';
import DevelopersAndPartnersSection2 from '../components/organims/DevelopersAndPartnersSection2';

const DevsAndPartners = props => {
  const DATA = props.data.devsAndPartners.data;
  return (
    <App>
      <Seo
        title={DATA.seo_title}
        description={DATA.seo_description}
        image={DATA.seo_image.url}
      />
      <Hero
        title={DATA.hero_title}
        subtitle={DATA.hero_baseline}
        status={DATA.hero_status}
        gradient={{
          top: DATA.hero_gradient_top,
          bottom: DATA.hero_gradient_bottom,
        }}
      />
      <DevelopersAndPartnersSection1
        title={DATA.section_1_title}
        items={DATA.card}
        buttons={DATA.section_1_button}
      />
      <DevelopersAndPartnersSection2
        gradient={{
          top: DATA.section_2_gradient_top,
          bottom: DATA.section_2_gradient_bottom,
        }}
        title={DATA.section_2_title}
        quote={{
          text: DATA.section_2_quote,
          author: DATA.section_2_quote_author,
        }}
        items={DATA.card1}
        text={DATA.section_2_text}
        buttons={DATA.section_2_button}
      />
    </App>
  );
};

export default DevsAndPartners;
export const pageQuery = graphql`
  query devsAndPartnersQuery {
    devsAndPartners: prismicDevsandpartners {
      data {
        seo_title
        seo_description
        seo_image {
          url
        }
        hero_title
        hero_baseline
        hero_gradient_top
        hero_gradient_bottom
        hero_status
        section_1_title
        section_1_button {
          text
          url
          type
          theme
          tracking_class
        }
        card {
          title
          subtitle
          tag
          image {
            url
            dimensions {
              width
              height
            }
          }
          shape {
            url
            dimensions {
              width
              height
            }
          }
        }
        section_2_gradient_top
        section_2_gradient_bottom
        section_2_title
        section_2_button {
          text
          url
          type
          theme
          tracking_class
        }
        section_2_quote
        section_2_quote_author
        section_2_text
        card1 {
          image {
            url
            dimensions {
              width
              height
            }
          }
          title
        }
      }
    }
  }
`;
