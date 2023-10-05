
import { gql } from 'graphql-tag';

export const GET_Rocket_Company = gql`
query Company {
      company{
        ceo
        cto
        cto_propulsion
        employees
        founded
        founder
        headquarters{
          address
          city
          state
        }
        launch_sites
        links{
          elon_twitter
          flickr
          twitter
          website
          
        }
        name
        summary
        test_sites
         valuation
        vehicles
        
        
      }
      
      }
`
export const GET_Rocket_dragons = gql`
  query Dragons {
    dragons {
      crew_capacity
      active
      description
      diameter {
        feet
        meters
      }
      dry_mass_kg
      dry_mass_lb
      first_flight
      heat_shield {
        dev_partner
        material
        temp_degrees
      }
      height_w_trunk {
        feet
        meters
      }
      id
      launch_payload_mass {
        kg
        lb
      }
      launch_payload_vol {
        cubic_feet
        cubic_meters
      }
      name
      orbit_duration_yr
      pressurized_capsule {
        payload_volume {
          cubic_feet
          cubic_meters
        }
      }
      return_payload_mass {
        kg
        lb
      }
      sidewall_angle_deg
      thrusters {
        amount
        fuel_1
        fuel_2
        pods
        thrust {
          kN
          lbf
        }
      }
      wikipedia
    }
  }
`


export const GET_Rocket_Histories = gql`

query Histories {
      histories{
        details
        event_date_unix
        event_date_utc
        flight{
          details
          id
          is_tentative
          launch_date_local
           launch_date_unix
          launch_date_utc
          launch_site
        {
          site_name
           site_id
          site_name_long
        }
          launch_success
          launch_year
          links{
            article_link
            flickr_images
            mission_patch
            mission_patch_small
            presskit
            video_link
             wikipedia
          }
          mission_name
          mission_id
          rocket {
            fairings
            {
              recovered
            }
             
          }
          ships{
            attempted_landings
            class
            image
            roles
          }
          static_fire_date_unix
          static_fire_date_utc
          telemetry{
            flight_club
            
          }
          upcoming
        }
        
      }
      
      }
      
      
      

`;