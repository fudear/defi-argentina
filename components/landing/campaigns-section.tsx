import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "next-i18next";

interface CampaignsSectionProps {
  id: string;
}

const CampaignsSection: FunctionComponent<CampaignsSectionProps> = ({ id }) => {
  const { t } = useTranslation("landing");

  const campaigns = [
    {
      image: "campaign1.jpg",
      title: t(`campaigns.item-1.title`),
      description: t(`campaigns.item-1.description`),
    },
    {
      image: "campaign2.jpg",
      title: t(`campaigns.item-2.title`),
      description: t(`campaigns.item-2.description`),
    },
    {
      image: "campaign3.jpg",
      title: t(`campaigns.item-3.title`),
      description: t(`campaigns.item-3.description`),
    },
  ];

  return (
    <Stack id={id}>
      <Stack gap={2} mb={4}>
        <Typography variant="h4" fontWeight="700" align="center">
          {t(`campaigns.title`)}
        </Typography>

        <Typography align="center">{t(`campaigns.description`)}</Typography>
      </Stack>

      <ItemsContainer>
        {campaigns.map(({ image, title, description }) => (
          <Card key={title}>
            <CardMedia
              component="img"
              height="250"
              image={`/assets/images/campaigns/${image}`}
              alt={title}
            />

            <CardContent>
              <Typography variant="h5" fontWeight="600">
                {title}
              </Typography>

              <Typography color="text.secondary">{description}</Typography>
            </CardContent>
          </Card>
        ))}
      </ItemsContainer>
    </Stack>
  );
};

export default CampaignsSection;

const ItemsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 3rem;
`;
