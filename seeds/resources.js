
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, image1:'/resourcesImgs/anxiety.jpg', title:'', header:'What is Anxiety?', 
        subheader:'', blurb:"Anxiety is more than just feeling stressed or worried. While stress and anxious feelings are a common response to a situation where we feel under pressure, they usually pass once the stressful situation has passed, or ‘stressor’ is removed. Anxiety is when these anxious feelings don't go away – when they're ongoing and happen without any particular reason or cause. It’s a serious condition that makes it hard to cope with daily life. Everyone feels anxious from time to time, but for someone experiencing anxiety, these feelings aren't easily control. Anxiety is the most common mental health condition in Australia. On average, one in four people – one in three women and one in ﬁve men – will experience anxiety at some stage in their life. 1 In a 12-month period, over two million Australians experience anxiety. 2 Anxiety is common, but the sooner people with anxiety get support, the more likely they are to recover.", text_extra:''},
        {id: 2, image1:'/resourcesImgs/depression.jpg', title:'What is depression?', header:'One in seven',
        subheader:'Kiwis will experience depression before the age of 24.', blurb:"While we all feel sad, moody or low from time to time, some people experience these feelings intensely, for long periods of time (weeks, months or even years) and sometimes without any apparent reason. Depression is more than just a low mood – it's a serious condition that affects your physical and mental health.", text_extra:''},
        {id: 3, image1:'/resourcesImgs/prevention..jpg', title:'', header:'Preventing Kiwi Suicides', 
        subheader: '', blurb:"Tragically, the rates of suicide in New Zealand have steadily increased since 2015. For every suicide, there are tragic ripple effects for friends, families, colleagues and the broader community. If someone you know seems to be struggling, reach out and connect with them. Showing that you care could make a huge difference. If you find that you are struggling, it might feel better to reach out for support, talk to someone and make some positive changes, rather than doing it alone.", text_extra:''}
      ]);
    });
};
