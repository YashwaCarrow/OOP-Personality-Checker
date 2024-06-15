#! /usr/bin/env node 

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.bold.bgBlueBright("Welcome to Y4C5-Personality Analyzaition System."));

class Question {
    question: string;
    choices: { name: string; value: string }[];
  
    constructor(question: string, choices: { name: string; value: string }[]) {
      this.question = question;
      this.choices = choices;
    }
  }
  
  class PersonalityChecker {
    questions: Question[];
  
    constructor() {
      this.questions = [
        new Question('When faced with a challenge,You.', [
          { name: 'Tackle it head on.', value: 'A' },
          { name: 'Think of a plan.', value: 'B' },
          { name: 'Seek advice from others.', value: 'C' },
          { name: 'Avoid it if possible.', value: 'D' },
        ]),
        new Question('Your ideal weekend involves.', [
          { name: 'Outdoor adventures.', value: 'A' },
          { name: 'Reading a book.', value: 'B' },
          { name: 'Hanging out with friends.', value: 'C' },
          { name: 'Watching movies and Playing battle royale games at Home.', value: 'D' },
        ]),
        new Question('You prefer to work.', [
          { name: 'In a team.', value: 'C' },
          { name: 'Independently.', value: 'B' },
          { name: 'With a mentor.', value: 'A' },
          { name: 'With clear instructions.', value: 'D' },
        ]),
        new Question('When making decisions,You rely on.', [
          { name: 'Intuition.', value: 'A' },
          { name: 'Data and Analysis.', value: 'B' },
          { name: 'Advice from others.', value: 'C' },
          { name: 'Your past experiences.', value: 'D' },
        ]),
        new Question('In a social setting,You.', [
          { name: 'Are the life of the party.', value: 'A' },
          { name: 'Prefer one-on-one conversations.', value: 'B' },
          { name: 'Enjoy mingling with everyone.', value: 'C' },
          { name: 'Feel overwhelmed and prefer to leave early.', value: 'D' },
        ]),
        new Question('When learning something new,You.', [
          { name: 'Jump right in and experiment.', value: 'A' },
          { name: 'Read instructions or a manual.', value: 'B' },
          { name: 'Ask someone to teach you.', value: 'C' },
          { name: 'Watch tutorials and Read articles about the specified topic.', value: 'D' },
        ]),
        new Question('Your approach to problem-solving is.', [
          { name: 'Innovative and creative.', value: 'A' },
          { name: 'Logical and systematic.', value: 'B' },
          { name: 'Collaborative and inclusive.', value: 'C' },
          { name: 'Practical and straightforward.', value: 'D' },
        ]),
        new Question('When it comes to risks,You.', [
          { name: 'Take them without hesitation.', value: 'A' },
          { name: 'Evaluate the pros and cons carefully.', value: 'B' },
          { name: 'Discuss with others before proceeding.', value: 'C' },
          { name: 'Avoid them as much as possible.', value: 'D' },
        ]),
        new Question('You prefer to spend your free time.', [
          { name: 'Engaging in physical activities.', value: 'A' },
          { name: 'Reading or learning something new.', value: 'B' },
          { name: 'Socializing with friends.', value: 'C' },
          { name: 'Relaxing and doing nothing.', value: 'D' },
        ]),
        new Question('In a team project,You\'re likely to.', [
          { name: 'Take the lead and direct the team.', value: 'A' },
          { name: 'Focus on organizing and planning.', value: 'B' },
          { name: 'Ensure everyone\'s ideas are heard.', value: 'C' },
          { name: 'Handle specific tasks assigned to you.', value: 'D' },
        ]),
      ];
    }
  
    async conductTest() {
      let score: { [key: string]: number } = { A: 0, B: 0, C: 0, D: 0 };
  
      for (const question of this.questions) {
        const answer = await inquirer.prompt([
          {
            type: 'list',
            name: 'response',
            message: chalk.blue(question.question),
            choices: question.choices,
          },
        ]);
  
        score[answer.response]++;
      }
  
      this.displayPersonality(score);
    }
  
    displayPersonality(score: { [key: string]: number }) {
      const maxScore = Math.max(score.A, score.B, score.C, score.D);
      let personalityType = '';
      let appreciation = '';
  
      switch (maxScore) {
        case score.A:
          personalityType = 'Adventurous';
          appreciation = 'You\'re bold and fearless.Your courage and willingness to take risks inspire those around you.';
          break;
        case score.B:
          personalityType = 'Analytical';
          appreciation = 'You\'ve got a keen eye for detail and a logical mind.Your ability to think critically and solve problems is invaluable.';
          break;
        case score.C:
          personalityType = 'Social';
          appreciation = 'You\'re a people person who thrives on connections.Your empathy and communication skills make you a great friend and team member.';
          break;
        case score.D:
          personalityType = 'Prudent';
          appreciation = 'You\'re careful and considerate.Your thoroughness and ability to foresee potential issues ensure that everything runs smoothly.';
          break;
      }
  
      console.log(chalk.greenBright(`\nYour Personality type is ${personalityType}.`));
      console.log(chalk.whiteBright(`${appreciation}`));
      console.log(chalk.yellowBright(`\nYour Personality Scores:\nAdventurous: ${score.A}\nAnalytical: ${score.B}\nSocial: ${score.C}\nPrudent: ${score.D}`));
      console.log(chalk.italic.bgBlackBright("\n Thanks for using Y4C5-Personality Analyzaition System."));
    }
  }
  
  async function main() {
    const personalityChecker = new PersonalityChecker();
    await personalityChecker.conductTest();
  }
  
  main();