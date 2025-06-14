from typing import List, Dict, Tuple
from data.careers import career_paths

def calculate_career_matches(user_profile: Dict) -> List[Dict]:
    """Calculate career matches based on user profile"""
    scored_careers = []
    
    for career in career_paths:
        match_score = 0
        
        # RIASEC type matching (40% weight)
        primary_score = user_profile['riasec_scores'].get(career['primary_type'], 0)
        secondary_score = 0
        if career.get('secondary_type'):
            secondary_score = user_profile['riasec_scores'].get(career['secondary_type'], 0)
        
        riasec_score = (primary_score * 0.7 + secondary_score * 0.3)
        match_score += riasec_score * 0.4
        
        # Skills matching (35% weight)
        user_skills = list(user_profile['skills_confidence'].keys())
        matching_skills = []
        for skill in career['required_skills']:
            for user_skill in user_skills:
                if skill.lower() in user_skill.lower() or user_skill.lower() in skill.lower():
                    matching_skills.append(skill)
                    break
        
        skills_score = (len(matching_skills) / len(career['required_skills'])) * 100 if career['required_skills'] else 0
        match_score += skills_score * 0.35
        
        # Work values alignment (25% weight)
        value_keywords = {
            'Work-Life Balance': ['flexible', 'balance', 'remote'],
            'High Salary': ['salary', 'compensation', 'financial'],
            'Job Security': ['stable', 'secure', 'established'],
            'Creative Freedom': ['creative', 'artistic', 'innovative'],
            'Helping Others': ['social', 'helping', 'service'],
            'Recognition': ['leadership', 'management', 'achievement'],
            'Autonomy': ['independent', 'self-directed', 'entrepreneurial'],
            'Intellectual Challenge': ['analytical', 'problem solving', 'research'],
            'Variety': ['diverse', 'varied', 'different'],
            'Advancement Opportunities': ['growth', 'career progression', 'leadership']
        }
        
        values_score = 0
        career_text = f"{career['description']} {' '.join(career['work_environment'])}".lower()
        
        for value in user_profile['work_values']:
            keywords = value_keywords.get(value, [])
            if any(keyword in career_text for keyword in keywords):
                values_score += 20
        
        values_score = min(values_score, 100)
        match_score += values_score * 0.25
        
        career_with_score = career.copy()
        career_with_score['match_score'] = round(match_score)
        scored_careers.append(career_with_score)
    
    # Sort by match score
    scored_careers.sort(key=lambda x: x['match_score'], reverse=True)
    return scored_careers[:6]

def get_top_riasec_types(riasec_scores: Dict) -> List[Tuple[str, float]]:
    """Get top 3 RIASEC types"""
    sorted_types = sorted(riasec_scores.items(), key=lambda x: x[1], reverse=True)
    return sorted_types[:3]
