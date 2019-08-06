// react & router
import React from 'react';

// react-markdown
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import UpdateIcon from '@material-ui/icons/Update';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WarningIcon from '@material-ui/icons/Warning';
import CodeIcon from '@material-ui/icons/Code';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import LabelOffIcon from '@material-ui/icons/LabelOff';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import LockIcon from '@material-ui/icons/Lock';
import ReceiptIcon from '@material-ui/icons/Receipt';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    background: '#e2f2ff'
  },
  defaultPageCon: {
    paddingTop: '60px',
    paddingBottom: '80px',
    background: '#e2f2ff'
  },
  title: {
    paddingBottom: '15px'
  },
  text: {
    paddingBottom: '10px',
    margin: '0px!important'
  }
}));

const RoadMap = props => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg" className={classes.defaultPageCon}>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="In Development"
              iconStyle={{ background: 'rgb(71, 79, 96)', color: '#fff' }}
              icon={<UpdateIcon />}
            >
              <Typography variant="h2" className={classes.title}>
                Updating, Combining and Modifying OpenCPEs
              </Typography>
              <Typography className={classes.text}>
                We support update tokens, we want to allow people to update
                individual records, combine them and create new sets of records
                and more .
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="In Development"
              iconStyle={{ background: 'rgb(44, 179, 200)', color: '#fff' }}
              icon={<AssignmentIcon />}
            >
              <Typography variant="h2" className={classes.title}>
                Structured Claims and Data
              </Typography>
              <Typography className={classes.text}>
                Currently, we do not have a data schema, we want to work with
                the community on this.
              </Typography>
              <Typography className={classes.text}>
                A catalog of common claims for both CPEs and certifications so
                they can easily be created.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Planned"
              iconStyle={{ background: 'rgb(239, 54, 43)', color: '#fff' }}
              icon={<WarningIcon />}
            >
              <Typography variant="h2" className={classes.title}>
                Watermarking of Claims
              </Typography>
              <Typography className={classes.text}>
                When sharing a claim with a third party, support watermarking,
                so that if a third party leaks it you’ll be able to trace the
                leak, this feature will also dovetail with structured claims and
                data as well as data redaction and blinding.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Planned"
              iconStyle={{ background: 'rgb(155, 155, 155)', color: '#fff' }}
              icon={<CodeIcon />}
            >
              <Typography variant="h2" className={classes.title}>
                Release of Reference Libraries
              </Typography>
              <Typography className={classes.text}>
                A Javascript reference library (currently in use in the demo
                website).
              </Typography>
              <Typography className={classes.text}>
                A SWIFT reference library (currently in use in the OpenCPEs
                wallet client).
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Planned"
              iconStyle={{ background: 'rgb(71, 79, 96)', color: '#fff' }}
              icon={<CompareArrowsIcon />}
            >
              <Typography variant="h2" className={classes.title}>
                Third-party Integration
              </Typography>
              <Typography className={classes.text}>
                We will be creating integrations with CSA working groups, CSA
                chapters, and CSA Research so people can easily claim CPEs.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Planned"
              iconStyle={{ background: 'rgb(44, 179, 200)', color: '#fff' }}
              icon={<LabelOffIcon />}
            >
              <Typography variant="h2" className={classes.title}>
                Data Redaction and Blinding
              </Typography>
              <Typography className={classes.text}>
                We want to add the ability to selectively release data, e.g.
                removing your name or date of birth from records before
                releasing them to a third party, this feature also dovetails
                tightly with structured claims and data and watermarking.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Planned"
              iconStyle={{ background: 'rgb(239, 54, 43)', color: '#fff' }}
              icon={<QuestionAnswer />}
            >
              <Typography variant="h2" className={classes.title}>
                Syntactic Queries and Answers
              </Typography>
              <Typography className={classes.text}>
                We want to allow the client to answer questions such as “Is this
                person a minor or an adult?” in a yes/no fashion without
                releasing any information other than what is needed.
              </Typography>
              <Typography className={classes.text}>
                Allowing more creative use of records to answer questions, e.g.
                if I am asked “are you an adult (over 18)” I may not want to
                release my date of birth, what if instead I could release a
                record proving I was alive 18+ years ago (such as my MCSE for NT
                4.0).
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Planned"
              iconStyle={{ background: 'rgb(155, 155, 155)', color: '#fff' }}
              icon={<LockIcon />}
            >
              <Typography variant="h2" className={classes.title}>
                Queries With “Locked” Replies
              </Typography>
              <Typography className={classes.text}>
                We want to allow clients to “lock” a reply to a query, for
                example using a smart contract if the client data has leaked a
                bond could be forfeited.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Planned"
              iconStyle={{ background: 'rgb(71, 79, 96)', color: '#fff' }}
              icon={<ReceiptIcon />}
            >
              <Typography variant="h2" className={classes.title}>
                Smart Contracts
              </Typography>
              <Typography className={classes.text}>
                Smart contracts framework and languages to be supported.
              </Typography>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Container>
      </div>
    </>
  );
};

export default RoadMap;
