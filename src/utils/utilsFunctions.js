import data from './utilsData';

const sortTopicData = ({ input, topic, keyIdentifier }) => {
  let topicData = [];
  if (data?.[keyIdentifier]?.[topic]) {
    topicData = data[keyIdentifier][topic].map((key) => ({
      label: key.replaceAll('_', ' '),
      value: input[key] || null,
    }));
  }

  return topicData;
};

export { sortTopicData, data };
