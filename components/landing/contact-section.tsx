import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Card, CardContent, Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import useIsMobile from "../../hooks/useIsMobile";
import { FORMS } from "../../models/forms";
import MiniHeader from "../common/mini-header";

interface ContactSectionProps {
  id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const { t } = useTranslation("landing");
  const isMobile = useIsMobile();

  const actions = [
    {
      icon: <VolunteerActivismIcon fontSize="large" color="primary" />,
      title: t(`contact.action-1.title`),
      description: t(`contact.action-1.description`),
      link: FORMS.VOLUNTEER,
    },
    {
      icon: <CorporateFareIcon fontSize="large" color="primary" />,
      title: t(`contact.action-2.title`),
      description: t(`contact.action-2.description`),
      link: FORMS.ORGANIZATION,
    },
    {
      icon: <QuestionMarkIcon fontSize="large" color="primary" />,
      title: t(`contact.action-3.title`),
      description: t(`contact.action-3.description`),
      link: FORMS.HELP,
    },
  ];

  return (
    <Stack id={id}>
      <Stack mb={6}>
        <MiniHeader text={t(`contact.mini-header`)} />

        <Typography variant="h4" fontWeight="700" maxWidth="40ch">
          {t(`contact.title`)}
        </Typography>

        <Typography mt={1}>{t(`contact.description`)}</Typography>
      </Stack>

      <Stack direction={isMobile ? "column" : "row"} gap={4}>
        {actions.map(({ icon, title, description, link }, index) => (
          <ActionCard
            key={index}
            variant="outlined"
            onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                {icon}

                <OpenInNewIcon fontSize="small" color="primary" />
              </Stack>

              <Typography variant="h5" mt={2} fontWeight="600">
                {title}
              </Typography>

              <Typography>{description}</Typography>
            </CardContent>
          </ActionCard>
        ))}
      </Stack>
    </Stack>
  );
};

export default ContactSection;

const ActionCard = styled(Card)`
  transition: 200ms;
  flex: 1;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
    transform: scale(1.05);
  }
`;
