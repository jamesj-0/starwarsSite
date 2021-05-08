import data from './utilsData';

const sortTopicData = ({ input, topic, keyIdentifier }) => {
  let topicData = [];

  topicData = data[keyIdentifier][topic].map((key) => ({
    label: key.replaceAll('_', ' '),
    value: input[key] || null,
  }));

  return topicData;
};

export { sortTopicData, data };
