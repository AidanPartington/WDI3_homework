# https://ga-students.slack.com/files/mattswann/F089U453L/gradeskool.md

class School

    def initialize(name)
      @db = {}
    end

    def db
      @db
    end

    def add(name,grade)
      @db[grade] || =[]

      # if @db[grade] == nil
      #   @db[grade] = []
      # end

      @db[grade] << name
    end

    def grade(grade)
      @db[grade]
    end

end